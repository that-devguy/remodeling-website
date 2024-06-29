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
      <DialogTrigger>
        <div className="md:text-md rounded-md bg-[#116ed1] px-5 py-3 text-sm font-bold text-white md:px-8 hover:bg-[#0f5eb7]">
          {title}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8 font-medium">
            Request a Free Consultation
          </DialogTitle>
          <DialogDescription>
            <RequestForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Button;
