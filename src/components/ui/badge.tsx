import * as React from "react"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-300 text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        java:
          "border-transparent bg-yellow-200 text-secondary-foreground hover:bg-yellow-100",
        js:
          "border-transparent bg-yellow-400 text-secondary-foreground hover:bg-yellow-300",
        ts:
          "border-transparent bg-blue-400 text-secondary-foreground hover:bg-blue-300",
        c:
          "border-transparent bg-blue-600 text-white hover:bg-blue-500",
        php:
          "border-transparent bg-purple-400 text-white hover:bg-purple-300",
        python:
          "border-transparent bg-gradient-to-r from-blue-500 to-yellow-500 text-white hover:from-blue-400 hover:to-yellow-400",
        git:
          "border-transparent bg-red-800 text-white hover:bg-red-700",
        docker:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        vite:
          "border-transparent bg-gradient-to-tr from-blue-400 to-purple-500 text-white hover:from-blue-300 hover:via-yellow-300 hover:to-purple-400",
        next:
          "border-transparent bg-black text-white hover:bg-gray-800",
        shadcn:
          "border-transparent bg-white text-black hover:bg-gray-100",
        sql:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        postgresql:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        mysql:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        mongodb:
          "border-transparent bg-green-400 text-white hover:bg-green-300",
        react:
          "border-transparent bg-blue-200 text-secondary-foreground  hover:bg-blue-100",
        tailwindcss:
          "border-transparent bg-cyan-600 text-white hover:bg-cyan-500",
        symfony:
          "border-transparent bg-black text-white hover:bg-gray-800",
        primefaces:
          "border-transparent bg-black text-white hover:bg-gray-800",
        primeflex:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        css:
          "border-transparent bg-pink-400 text-white hover:bg-pink-300",
        maven:
          "border-transparent bg-red-400 text-white hover:bg-red-300",
        kubernetes:
          "border-transparent bg-green-400 text-white hover:bg-green-300",
        api:
          "border-transparent bg-fuchsia-400 text-white hover:bg-fuchsia-300",
        discord:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        webhook:
          "border-transparent bg-amber-400 text-white hover:bg-amber-300",
        vinted:
          "border-transparent bg-emerald-400 text-white hover:bg-emerald-300",
        telegram:
          "border-transparent bg-blue-400 text-white hover:bg-blue-300",
        crypto:
          "border-transparent bg-yellow-400 text-white hover:bg-yellow-300",
        ai:
          "border-transparent bg-green-400 text-white hover:bg-green-300",
        backtesting:
          "border-transparent bg-gray-400 text-white hover:bg-gray-300",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
}

function Badge({className, variant, ...props}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({variant}), className)} {...props} />
  )
}

export {Badge, badgeVariants}
