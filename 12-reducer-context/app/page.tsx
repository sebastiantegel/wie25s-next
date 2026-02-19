import { Cart } from "./components/Cart";
import { TodoApp } from "./components/todos/TodoApp";

export default function Home() {
  // Skapa restaurant
  const createRestaurant = async () => {
    fetch("https://school-restaurant-api.azurewebsites.net/restaurant/create", {
      method: "POST",
      body: JSON.stringify({
        name: "My restaurant name",
        address: {
          street: "Drottninggatan 1",
          zip: "110 10",
          city: "Stockholm",
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const getBookings = async () => {
    // Hämta alla bokningar för en restaurant
    const repsonse = await fetch(
      "https://school-restaurant-api.azurewebsites.net/booking/restaurant/623b85d54396b96c57bde7c3",
    );

    // data är en lista med bokningsobjekt från api:t
    const data = await repsonse.json();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center gap-4 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Cart />
        <TodoApp />
      </main>
    </div>
  );
}
