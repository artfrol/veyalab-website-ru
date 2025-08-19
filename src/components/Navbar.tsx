import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#solutions", label: "Решения" },
  { href: "#how-we-work", label: "Как мы работаем" },
  { href: "#integrations-security", label: "Интеграции и безопасность" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Активный пункт по hash
  useEffect(() => {
    const applyHash = () => setActiveHash(window.location.hash || "");
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Закрытие по Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
    }
    return () => root.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur border-b z-50">
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text leading-none">
              Veya<span className="text-brand-blue">Lab</span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeHash === link.href ? "page" : undefined}
                className={cn(
                  "text-base font-medium transition-colors",
                  activeHash === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {link.label}
              </a>
            ))}

            <Button asChild>
              <a
                href="https://calendly.com/artfrol-af/artem-frolov"
                className="ml-2 font-medium"
              >
                Получить бесплатную консультацию
              </a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 transition-opacity md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-y-0 right-0 w-[86%] max-w-sm bg-white z-50 md:hidden",
          "transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <a href="#" className="text-xl font-bold gradient-text" onClick={closeMenu}>
            Veya<span className="text-brand-blue">Lab</span>
          </a>
          <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
            <X size={20} />
          </Button>
        </div>

        <nav className="px-4 py-6 flex flex-col gap-4">
          {/* Порядок: Solutions → How We Work → Integrations & Security */}
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium transition-colors",
                activeHash === link.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <Button asChild className="mt-4">
            <a href="https://calendly.com/artfrol-af/artem-frolov" onClick={closeMenu}>
              Получить бесплатную консультацию
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;