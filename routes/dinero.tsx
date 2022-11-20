import { add, dinero, toFormat } from "dinero.js";
import { USD } from "@dinero.js/currencies";

export default function DineroPage() {
  const d1 = dinero({ amount: 500, currency: USD });
  const d2 = dinero({ amount: 500, currency: USD });
  const d3 = add(d1, d2);

  return (
    <main>
      <h1>Dinero Works!</h1>
      <p>{toFormat(d3, ({ amount }) => `$${amount}`)}</p>
    </main>
  );
}
