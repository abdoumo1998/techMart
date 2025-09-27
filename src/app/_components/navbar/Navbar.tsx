"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@compenents/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@compenents/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useContext, useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { getUserCart } from "@/app/_services/cart.service";
import { cartContext } from "../MySessionProvider/cartContext";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data } = useSession();
  const [initialCartCount, setCartCount] = useState(0)
  const {cartCount} = useContext(cartContext)

  useEffect(function(){
    getUserCart().then(res => {
      setCartCount(res.numOfCartItems)
    })
  },[])

  const authNavItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Product" },
    { href: "/categories", label: "Categories" },
    { href: "/Brand", label: "Brand" },
    { href: "/wishlist", label: "Wishlist" },
  ];
  const guestNavItems = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  const navItems = data?.user ? authNavItems : guestNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl">TechMart</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <NavigationMenuItem key={item.href}>
                  
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md font-semibold"
                            : "bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

         

            {/* Shopping Cart */}
<Link href="/cart">
  <Button variant="ghost" size="icon" className="relative">
    <ShoppingCart className="h-5 w-5" />
    {(cartCount || initialCartCount) > 0 && (
      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
        {cartCount || initialCartCount}
      </span>
    )}
    <span className="sr-only">Shopping cart</span>
  </Button>
</Link>

            



            

            {/* ✅ Logout */}
            {data?.user && (
              <Button
                variant="destructive"
                size="sm"
                className="hidden lg:flex items-center  gap-1"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* ✅ Logout in mobile */}
              {data?.user && (
                <Button
                  variant="destructive"
                  className="mt-2 flex items-center gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut({ callbackUrl: "/login" });
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
