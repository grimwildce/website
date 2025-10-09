import Line from "@/components/ui/Line";
import classNames from "classnames";
import { type ReactNode } from "react";

type BookTitleProps = {
  subtitle?: string;
  children: ReactNode;
};

const BookTitle = ({ subtitle, children }: BookTitleProps) => {
  return (
    <>
      <div className={classNames("text-center font-heading leading-none mt-12")}>
        <div className="text-6xl uppercase font-bold">{children}</div>
        {subtitle && <div className="text-4xl italic font-light">{subtitle}</div>}
      </div>
      <Line color="muted" />
    </>
  );
};

export default BookTitle;
