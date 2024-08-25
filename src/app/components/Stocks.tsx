"use client";
import React, { useState, useRef, useCallback } from "react";
import Card from "antd/lib/card";
import "antd/dist/reset.css";
import SearchBar from "./Search";
import { useInfiniteQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { Meta } = Card as any;

const queryClient = new QueryClient();

type Stock = {
  ticker: string;
  name: string;
  market: string;
  locale: string;
};

type FetchStocksResponse = {
  results: Stock[];
  count: number;
};

const fetchStocks = async ({ queryKey, pageParam = 1 }: { queryKey: [string, string]; pageParam?: number }): Promise<Stock[]> => {
  const [, searchQuery] = queryKey;
  try {
    const response = await fetch(`https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey=wTLX7m7P5HpNZSo2xcmoHHlh2MdbdRHS&page=${pageParam}`);
    const data: FetchStocksResponse = await response.json();

    // Filter the stocks by the search query
    const filteredResults = data.results.filter(stock =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredResults || [];
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};

const StocksList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["stocks", searchQuery],
    queryFn: ({ pageParam = 1 }: { pageParam?: number }) => fetchStocks({ queryKey: ["stocks", searchQuery], pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length > 0) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    enabled: !!searchQuery,
    staleTime: 15000,
  });

  const stocks = data?.pages.flat() || [];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const lastStockElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || (stocks.length === 0 && searchQuery)) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>No stocks found.</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {stocks.map((stock, index) => (
          <div
            key={stock.ticker}
            ref={index === stocks.length - 1 ? lastStockElementRef : undefined}
          >
            <Card
              hoverable
              style={{ width: 300, margin: '10px' }}
            >
              <Meta
                title={stock.name}
                description={stock.ticker}
                style={{ textAlign: 'left' }} // Align text to left
              />
            </Card>
          </div>
        ))}
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
    </div>
  );
};

StocksList.displayName = "StocksList";

const Stocks: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <StocksList />
  </QueryClientProvider>
);

Stocks.displayName = "Stocks";

export default Stocks;
