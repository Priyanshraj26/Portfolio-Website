import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pb-12 px-4 relative mb-4 pt-8 flex items-center justify-center">
      <p className="text-sm text-muted-foreground mx-auto">
        &copy; {new Date().getFullYear()} Priyansh Raj Gupta
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};