import Categories from "@/components/home/Categories";
import FavoriteAlbum from "@/components/home/FavoriteAlbum";
import FeaturedElement from "@/components/home/FeaturedElement";
import NewMusic from "@/components/home/NewMusic";
import PopularArtist from "@/components/home/PopularArtist";
import { account } from "@/config/appwriteClient";
import React from "react";

async function DashboardPage() {
  let user;
  try {
    user = await account.get();
    console.log(user);
  } catch (error) {
    console.error("User not authenticated", error);
    
    // Redirect to login page or handle the error appropriately
  }

  return (
    <main className="bg-primary grid grid-cols-1 md:grid-cols-[1fr_0.3fr] gap-5">
      <section className="flex flex-col gap-8">
        <FeaturedElement />
        <Categories />
        <NewMusic />
        <PopularArtist />
        {/* Audio Player component should be displayed when the music first loads */}
      </section>
      <FavoriteAlbum />
    </main>
  );
}

export default DashboardPage;
