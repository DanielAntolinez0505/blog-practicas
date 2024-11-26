"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const sections = [
    {
        title: "Portada Oficial",
        href: "#portada-oficial",
    },
    {
        title: "Nivel Básico",
        href: "#nivel-basico",
    },
    {
        title: "Nivel Analítico",
        href: "#nivel-analitico",
    },
    {
        title: "Nivel Crítico",
        href: "#nivel-critico",
    },
]

export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Contenido del Blog</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                            {sections.map((section) => (
                                <li key={section.href}>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href={section.href}
                                            className={cn(
                                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            )}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(section.href);
                                                if (target) {
                                                    target.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                    });
                                                }
                                            }}
                                        >
                                            <div className="text-sm font-medium leading-none">{section.title}</div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

