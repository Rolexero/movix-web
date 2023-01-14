import { Icon } from "@iconify/react";
import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  showPassword?: boolean;
  rightIcon?: string;
  onClickIcon?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  showPassword,
  rightIcon,
  onClickIcon,
  ...props
}: InputFieldProps) => {
  return (
    <div className="w-full flex relative">
      <input {...props} />
      {showPassword && (
        <button
          className="absolute right-4 top-6"
          onClick={onClickIcon}
          type="button"
        >
          <Icon icon={rightIcon ? rightIcon : ""} className="text-[20px]" />
        </button>
      )}
    </div>
  );
};
