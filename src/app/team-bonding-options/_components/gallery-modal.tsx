import QuoteForm from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

// import classes from "./no-scroll.module.css";
import { FaChevronRight } from "react-icons/fa";
import GalleryCarousel from "./gallery-carousel";

interface GalleryModalProps {
  logo: string;
  images: any[];
  description: string;
}

const GalleryModal = ({ logo, images, description }: GalleryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant="ghost" hideArrow>
          See Pictures <FaChevronRight className="text-color-orange " />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] ">
        <div
          className={cn(
            "overflow-y-auto overflow-x-hidden relative w-full h-full max-h-[700px] m-auto"
          )}
        >
          <DialogHeader className="mb-8 space-y-5">
            <DialogTitle className="mx-auto">
              <Image
                src={logo}
                alt=""
                className="w-[100px] rounded-xl "
                width={150}
                height={80}
              />
            </DialogTitle>

            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <GalleryCarousel images={images} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
