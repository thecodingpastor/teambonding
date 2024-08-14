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

const GetQuoteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase font-bold">Get a Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[90vh]">
        <div className="overflow-y-auto overflow-x-hidden relative h-full m-auto pr-4">
          <DialogHeader className="mb-8">
            <DialogTitle className="font-aleo text-3xl text-center">
              Need a <span className="text-color-orange">Quote ?</span>
            </DialogTitle>

            <DialogDescription className="text-center">
              Complete this form to get started or call{" "}
              <a href="tel:+234 803 262 2079">+234 803 262 2079</a>{" "}
            </DialogDescription>
          </DialogHeader>
          <QuoteForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetQuoteButton;
