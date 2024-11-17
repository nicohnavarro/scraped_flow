# Scraped Flow

## Next Version

We need to use this specific version

```bash
npx create-next-app@14.2.5
```

###

- [x] Typescript
- [x] ESLint
- [x] Tailwind CSS
- [ ] src/ directory
- [x] App router
- [x] Import alias


```bash
npx shadcn@2.1.0 init
```

- [x] Default
- [x] Neutral
- [x] CSS Variables

```bash
npx shadcn@2.1.0 add
```
> Select all components

### Variant Button

We need to add variants to the active link button in sidebar

```js
 variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        sidebarItem:
          "gap-2 !justify-start hover:bg-accent hover:bg-primary/80 hover:text-primary-foreground",
        sidebarActiveItem:
          "gap-2 !justify-start bg-primary text-primary-foreground hover:bg-primary/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
```


### Add Themes

```bash
npm i next-themes
```
