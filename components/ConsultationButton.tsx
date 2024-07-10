import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RequestForm from "@/components/RequestForm";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-md focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2">
        <div className="rounded-md bg-[#116ed1] px-4 py-2 text-sm font-medium text-white hover:bg-[#0f5eb7] md:px-8 md:text-base">
          {title}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-medium">
            Request a Free Consultation
          </DialogTitle>
          <DialogDescription>
            <p className="mb-8 md:text-base">
              We typically respond to your request for a consultation within 1
              business day.
            </p>
            <RequestForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Button;
