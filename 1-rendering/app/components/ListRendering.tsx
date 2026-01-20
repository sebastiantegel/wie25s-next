export const ListRendering = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  //   const lis = numbers.map((n, i) => {
  //     return <li key={i}>{n}</li>;
  //   });

  return (
    <div className="flex gap-2 flex-wrap">
      {numbers.map((n, i) => {
        return (
          <div
            key={i}
            className="w-32 h-32 border border-amber-500 flex items-center justify-center text-3xl font-bold"
          >
            {n}
          </div>
        );
      })}
    </div>
  );
};
