"use client";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { tricks } from "@/lib/data";
import { ClientOnly } from "@/registry/default/components/client-only";
import MediaPlayerAudioDemo from "@/registry/default/examples/media-player-audio-demo";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
} from "@/registry/default/ui/combobox";
import * as MediaPlayer from "@/registry/default/ui/media-player";
import * as Mention from "@diceui/mention";
import { ChevronDown } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <Shell>
      <ClientOnly fallback={<Skeleton className="h-[400px] w-full" />}>
        <MediaPlayerAudioDemo />
        <video tabIndex={-1} src="/assets/cloud.mp4">
          <track kind="captions" />
        </video>
        <MediaPlayer.Root>
          <MediaPlayer.Video>
            <source src="/assets/cloud.mp4" type="video/mp4" />
          </MediaPlayer.Video>
          <MediaPlayer.Controls className="flex-col items-start gap-2.5">
            <MediaPlayer.Overlay />
            <MediaPlayer.Seek />
            <div className="flex w-full items-center gap-2">
              <div className="flex flex-1 items-center gap-2">
                <MediaPlayer.Play />
                <MediaPlayer.SeekBackward />
                <MediaPlayer.SeekForward />
                <MediaPlayer.Volume expandable />
                <MediaPlayer.Time />
              </div>
              <div className="flex items-center gap-2">
                <MediaPlayer.PlaybackSpeed />
                <MediaPlayer.Captions />
                <MediaPlayer.Download />
                <MediaPlayer.PiP />
                <MediaPlayer.Fullscreen />
              </div>
            </div>
          </MediaPlayer.Controls>
        </MediaPlayer.Root>
      </ClientOnly>
      <div className="grid gap-8">
        <Combobox className="w-[15rem]">
          <ComboboxAnchor>
            <ComboboxInput placeholder="Search tricks..." />
            <ComboboxTrigger>
              <ChevronDown className="size-4" />
            </ComboboxTrigger>
          </ComboboxAnchor>
          <ComboboxContent>
            <ComboboxEmpty>No tricks found</ComboboxEmpty>
            {tricks.map((trick) => (
              <ComboboxItem key={trick.value} value={trick.value}>
                {trick.label}
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </Combobox>
        <Command defaultValue="heelflip" className="max-w-[15rem] border">
          <CommandInput placeholder="Search tricks..." />
          <CommandEmpty>No tricks found.</CommandEmpty>
          <CommandList>
            <CommandGroup heading="Tricks">
              {tricks.map((trick) => (
                <CommandItem key={trick.value} value={trick.value}>
                  {trick.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <Textarea
          placeholder="Type here..."
          className="min-h-[80px] max-w-[40rem]"
        />
        <Mention.Root className="flex max-w-[40rem] flex-col gap-2 **:data-tag:rounded **:data-tag:bg-blue-200 **:data-tag:py-px **:data-tag:text-blue-950 dark:**:data-tag:bg-blue-800 dark:**:data-tag:text-blue-50">
          <Mention.Label>Tricks</Mention.Label>
          <Mention.Input
            placeholder="Enter @ to mention a trick..."
            className="flex min-h-[80px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-zinc-500 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-zinc-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:focus-visible:ring-zinc-300"
            asChild
          >
            <textarea />
          </Mention.Input>
          <Mention.Portal>
            <Mention.Content className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in">
              {tricks.map((trick) => (
                <Mention.Item
                  key={trick.value}
                  label={trick.label}
                  value={trick.value}
                  className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50"
                >
                  {trick.label}
                </Mention.Item>
              ))}
            </Mention.Content>
          </Mention.Portal>
        </Mention.Root>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-fit">
              Open
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Apple</DropdownMenuItem>
            <DropdownMenuItem>Banana</DropdownMenuItem>
            <DropdownMenuItem>Blueberry</DropdownMenuItem>
            <DropdownMenuItem>Grapes</DropdownMenuItem>
            <DropdownMenuItem>Pineapple</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Select value="heelflip">
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="Select a trick" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tricks</SelectLabel>
              {tricks.map((trick) => (
                <SelectItem key={trick.value} value={trick.value}>
                  {trick.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Shell>
  );
}
