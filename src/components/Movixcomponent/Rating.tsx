import React from "react";
import tw, { styled } from "twin.macro";

interface RatingProps {
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ className }: RatingProps) => {
  return (
    <Wrapper className={className}>
      <div className="flex gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1674432000&Signature=HOkiCk9E~hQFg6uRSb62iPVHBjvqDhcnqiq3L~quhQhIUeq22xrNslkgHh0RxeoM5MdbwxKXPBCXC6T6TUHgVRqNoR1KY5o3DYRu5NVlzsS6OpAZ51PiJWYn3BtrmA5u3Z0l-wQjhB7H5LLuW2oqWko8pJR5HSNEwjsSMJIAQOtX4M4sYK44sURcVC6--fy7wtJAlNUxY0E5X7J~zQ0VWzVil-aYsgcs7MxQnr3wIL8Uv~c~-41TONc5dwTLQZ1qKkkTnBjPFh5RcQqTiPGhstc7~zaAbwQqeoW90QF-bfL7H3YHfV~xtMfAWvkylNBhWfGj2Efy51ljvckvaj4A0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="imbd logo"
          className="w-[35px] rounded"
        />
        <span className="font-normal text-sm">86.0 / 100</span>
      </div>
      <div className="flex  gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1674432000&Signature=BP6alqOldXDDw86L1BD9UZkDPXC01kwz7VG5yaUt6syDQ40AZ5ZyxSX8q556-BVJeaKlNBfWcpenceene-BMuLmYx~mCj9~ZrXKxyZ1o4aqrEEO-3ov4kGh2R~VSY0NOKtfaoiEP~n0JKEUYvFyWMebnkoSDSZwyEghrJsvZlegwatcJJ4drcIx~OWcvcgKtt9SDy3s~rGLYCPH4BEtJvw3cAGNQRDZfDIkSprxN18uKalDTXHbsSvFsb9sn~P-N6rUFL0mBfXGY~xQZaVwbNRGqKsHp~AcIZmaGnQ4V2zxalvz0E~EbylaZtS64N9Ij5uJE9oYUDTyIerJ5IU6c7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="imbd logo"
          className="w-[16px] "
        />
        <span className="font-normal text-sm">97%</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex justify-between`}
`;
