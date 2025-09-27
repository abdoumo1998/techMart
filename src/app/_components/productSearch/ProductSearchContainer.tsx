"use client";
import React, { useState, useMemo } from 'react';
import { productType } from '@/app/_intefaces/product';
import ProductCard from '../productCard/ProductCard';
import ProductSearch from './ProductSearch';
import Link from 'next/link';

interface ProductSearchContainerProps {
  products: productType[];
}

export default function ProductSearchContainer({ products }: ProductSearchContainerProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="w-full">
      {/* Search Component */}
      <ProductSearch onSearch={handleSearch} />
      
      {/* Results Count */}
      {searchTerm && (
        <div className="text-center mb-4">
          <p className="text-muted-foreground">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full mx-auto px-12 my-7">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product._id} href={`/productDetails/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found matching your search
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
