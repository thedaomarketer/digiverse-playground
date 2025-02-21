
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load Aweber form script
      const script = document.createElement('script');
      script.src = "//forms.aweber.com/form/34/489107234.js";
      script.id = "aweber-wjs-q9zv8mozr";
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        const existingScript = document.getElementById("aweber-wjs-q9zv8mozr");
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1a2e] border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white text-center">Join the Waitlist</DialogTitle>
        </DialogHeader>
        <div className="AW-Form-489107234"></div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
