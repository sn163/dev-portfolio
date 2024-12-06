import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cx } from "class-variance-authority";
import { Icon } from "react-feather";

type ButtonSizes = "sm" | "md" | "lg";
type ButtonVariants = "link" | "button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: ButtonVariants;
    size: ButtonSizes;
    icon?: {
      src: Icon;
      size: number;
      className?: string;
    };
    text?: string;
  };

const buttonSizes = {
  sm: "w-24 h-10 text-xs",
  md: "w-36 h-12 text-sm",
  lg: "w-40 h-14 text-md",
};

export const Button = ({ children, variant, size, className, href, icon, ...rest }: ButtonProps) => {
  const buttonClassName = cx(`btn-main flex justify-center items-center ${buttonSizes[size]}`, className);

  if (variant === "link") {
    return (
      <a href={href} className={buttonClassName} {...rest}>
        {icon && (
          <icon.src
            size={icon.size}
            className={`${icon.className} group duration-500 ease-in-out group-hover:scale-125 group-hover:animate-pulse`}
          />
        )}
        <span className="flex h-full items-center justify-center font-bold text-base-100">{children}</span>
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...rest}>
      <span className="flex h-full items-center justify-center font-bold text-base-100">{children}</span>
    </button>
  );
};

export default Button;
