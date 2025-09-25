import { type ReactNode } from "react";

type BookTitleProps = {
  subtitle?: string;
  children: ReactNode;
};

const BookTitle = ({ subtitle, children }: BookTitleProps) => {
  return (
    <div className="text-center font-heading leading-none mt-8 pb-8 border-b border-muted">
      <div className="text-6xl uppercase font-bold">{children}</div>
      {subtitle && <div className="text-4xl italic font-light">{subtitle}</div>}
    </div>
  );
};

export default BookTitle;
