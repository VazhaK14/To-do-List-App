import { SVGAttributes, useState } from "react";

export function ArrowLongUpIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className="w-[30px] hover:cursor-pointer transition-colors duration-300 hover:stroke-green-500"
      fill="none"
      strokeWidth={1.5}
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
      />
    </svg>
  );
}

export function ArrowLongDownIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className="w-[30px] hover:cursor-pointer transition-colors duration-300 hover:stroke-green-500"
      fill="none"
      strokeWidth={1.5}
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
      />
    </svg>
  );
}

export function XMarkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      className="w-[30px] hover:cursor-pointer transition-colors duration-300 hover:stroke-red-500"
      fill="none"
      strokeWidth={2}
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export function Checkbox(props: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleisCheckedChange() {
    setIsChecked(!isChecked);
  }

  function handleRemoveOnClick() {
    props.onClick();
  }

  return (
    <>
      <div className="flex flex-row-3 text-lg items-end border-b pb-4 motion-preset-slide-right-sm">
        <label className="flex">
          <input
            type="checkbox"
            onChange={handleisCheckedChange}
            className="peer relative hover:cursor-pointer mr-4 h-8 w-8 shrink-0 appearance-none rounded-full border-2 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-orange-600 focus:outline-none"
          />
          <p className={`${isChecked && "line-through text-gray-500"}`}>
            {props.task}
          </p>
        </label>
        <div className=" grid grid-cols-3 ml-auto">
          <ArrowLongDownIcon onClick={props.moveTaskDown} />
          <ArrowLongUpIcon onClick={props.moveTaskUp} />
          <XMarkIcon onClick={handleRemoveOnClick} />
        </div>
      </div>
    </>
  );
}

interface CheckBoxProps {
  task: any;
  onClick: () => void;
  moveTaskUp: () => void;
  moveTaskDown: () => void;
}
