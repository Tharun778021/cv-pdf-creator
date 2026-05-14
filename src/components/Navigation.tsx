import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, FileText, Download, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const openResume = () => {
    setIsSidebarOpen(false);
    setIsResumeOpen(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container px-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger
                  aria-label="Open navigation"
                  className="p-2 rounded-lg text-foreground hover:bg-card/60 transition-colors"
                >
                  <Menu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent side="left" className="glass border-r border-border/50 w-72">
                  <SheetHeader>
                    <SheetTitle className="text-gradient text-2xl font-bold text-left">
                      S. Tharun
                    </SheetTitle>
                    <SheetDescription className="text-left">
                      Navigate the portfolio
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
                      >
                        <span className="text-primary font-mono text-xs">
                          0{index + 1}.
                        </span>
                        <span className="text-base font-medium">{link.label}</span>
                      </a>
                    ))}
                    <button
                      onClick={openResume}
                      className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Resume
                    </button>
                  </div>
                </SheetContent>
              </Sheet>

              <a href="#" className="text-xl font-bold text-gradient">
                ST
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                onClick={openResume}
                className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Resume
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 glass border-border/50 flex flex-col">
          <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border/50">
            <div>
              <DialogTitle className="text-lg font-semibold">Resume — S. Tharun</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Preview the resume below or download it as a PDF.
              </DialogDescription>
            </div>
            <a
              href="/resume.pdf"
              download="S-Tharun-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
          <div className="flex-1 bg-background/40 overflow-hidden">
            <object
              data="/resume.pdf#toolbar=1&view=FitH"
              type="application/pdf"
              className="w-full h-full"
              aria-label="S. Tharun Resume"
            >
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                  typeof window !== "undefined" ? `${window.location.origin}/resume.pdf` : "/resume.pdf"
                )}&embedded=true`}
                title="S. Tharun Resume"
                className="w-full h-full"
              />
              <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                <FileText className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">
                  Your browser can't preview PDFs inline. Download the file to view it.
                </p>
                <a
                  href="/resume.pdf"
                  download="S-Tharun-Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
