"use client";

import * as React from "react";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import businessInfo from "@/app/mocks/business-info.json";

export type CTAAction = "call" | "book" | "sms";

type ButtonProps = React.ComponentProps<typeof Button>;

interface CTAButtonProps extends ButtonProps {
  action: CTAAction;
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  customIcon?: React.ReactNode;
}

export function CTAButton({
  action,
  showIcon = true,
  iconPosition = "left",
  customIcon,
  className,
  children,
  ...props
}: CTAButtonProps) {
  // Determine default content based on action
  const getDefaults = (action: CTAAction) => {
    switch (action) {
      case "call":
        return {
          href: `tel:${businessInfo.phone}`,
          icon: <Phone className="h-4 w-4" />,
          label: "Καλέστε Τώρα",
        };
      case "book":
        return {
          href: "/contact",
          icon: <Calendar className="h-4 w-4" />,
          label: "Κλείστε Ραντεβού",
        };
      case "sms":
        return {
          href: `sms:${businessInfo.mobile}`,
          icon: <MessageSquare className="h-4 w-4" />,
          label: "Στείλτε SMS",
        };
      default:
        return {
          href: `tel:${businessInfo.phone}`,
          icon: <Phone className="h-4 w-4" />,
          label: "Καλέστε Τώρα",
        };
    }
  };

  const defaults = getDefaults(action);
  const Icon = customIcon || defaults.icon;

  const content = (
    <>
      {showIcon && iconPosition === "left" && <span className="mr-2">{Icon}</span>}
      {children || defaults.label}
      {showIcon && iconPosition === "right" && <span className="ml-2">{Icon}</span>}
    </>
  );

  return (
    <Button className={cn(className)} {...props} asChild>
      <a href={defaults.href!} target={action === 'book' ? '_self' : undefined}>
        {content}
      </a>
    </Button>
  );
}
