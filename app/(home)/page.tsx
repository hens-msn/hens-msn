"use server"

import Hero from "./(sections)/Hero"
import Role from "./(sections)/Role"
import Kontas from "./(sections)/Kontas"
import About from "./(sections)/About"
import Blog from "./(sections)/Blog"
import Contact from "./(sections)/Contact"
import HomeClient from "./HomeClient"

export default async function Home() {
    return (
        <HomeClient>
            <Hero />
            <Role />
            <Kontas />
            <About />
            <Blog />
            <Contact />
        </HomeClient>
    )
}