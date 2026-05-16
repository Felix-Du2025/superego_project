"use client";

import {
  ArrowUpRight,
  Brain,
  Check,
  CircleUserRound,
  Clapperboard,
  Cloud,
  Command,
  GalleryHorizontalEnd,
  ImagePlus,
  Link2,
  Menu,
  MessageCircle,
  Mic2,
  Network,
  PenLine,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
  Wand2,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "创建动态", icon: PenLine, active: true },
  { label: "人格档案", icon: Brain },
  { label: "渠道绑定", icon: Link2 },
  { label: "智能交友", icon: UsersRound },
];

const channels = [
  { name: "Facebook", tone: "Social", color: "from-blue-400 to-sky-300" },
  { name: "WeChat Moments", tone: "Close", color: "from-emerald-400 to-lime-300" },
  { name: "Instagram", tone: "Visual", color: "from-fuchsia-400 to-rose-300" },
  { name: "LinkedIn", tone: "Career", color: "from-sky-400 to-cyan-200" },
  { name: "Weibo", tone: "Trend", color: "from-red-400 to-orange-300" },
  { name: "TikTok", tone: "Hook", color: "from-zinc-100 to-cyan-200" },
  { name: "Kuaishou", tone: "Life", color: "from-orange-300 to-amber-200" },
  { name: "Red Note", tone: "Seed", color: "from-rose-400 to-pink-200" },
  { name: "Twitter", tone: "Sharp", color: "from-zinc-200 to-blue-200" },
];

const memories = [
  { label: "Soul signal", value: "78%", accent: "bg-cyan-300" },
  { label: "MBTI inference", value: "INFJ-A", accent: "bg-violet-300" },
  { label: "Tone stability", value: "92", accent: "bg-emerald-300" },
];

export default function Home() {
  const [selected, setSelected] = useState(channels.map((channel) => channel.name));
  const [isDragging, setIsDragging] = useState(false);

  const allSelected = selected.length === channels.length;

  function toggleChannel(name: string) {
    setSelected((current) =>
      current.includes(name)
        ? current.filter((channel) => channel !== name)
        : [...current, name],
    );
  }

  function toggleAll() {
    setSelected(allSelected ? [] : channels.map((channel) => channel.name));
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-zinc-50">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_24%,transparent_70%,rgba(34,211,238,0.09))]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,39,42,0.9),transparent_42%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1480px] gap-4 p-3 md:p-5">
        <aside className="hidden w-[276px] shrink-0 flex-col rounded-[28px] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:flex">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 shadow-[0_0_34px_rgba(103,232,249,0.16)]">
                <Command className="size-5 text-cyan-100" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">Superego</p>
                <p className="text-xs text-zinc-500">social intelligence</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" aria-label="Open command">
              <Menu className="size-4" />
            </Button>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  "group flex h-12 w-full items-center gap-3 rounded-2xl px-3 text-sm text-zinc-400 transition",
                  item.active
                    ? "border border-white/12 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "hover:bg-white/[0.06] hover:text-zinc-100",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-3xl border border-white/10 bg-black/20 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Soul Kernel</p>
                <p className="text-xs text-zinc-500">memory graph alpha</p>
              </div>
              <ShieldCheck className="size-4 text-emerald-200" />
            </div>
            <div className="space-y-3">
              {memories.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="text-zinc-200">{item.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className={cn("h-full rounded-full", item.accent)}
                      style={{
                        width:
                          item.value === "INFJ-A"
                            ? "68%"
                            : item.value.replace("%", ""),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col rounded-[28px] border border-white/10 bg-zinc-950/55 shadow-2xl shadow-black/50 backdrop-blur-2xl">
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 md:px-7">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="grid size-10 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10">
                <Command className="size-5 text-cyan-100" />
              </div>
              <span className="font-semibold">Superego</span>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-zinc-500">Workspace</p>
              <h1 className="text-xl font-semibold tracking-tight">
                创建动态
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="glass" size="sm">
                <Plus className="size-4" />
                New Soul
              </Button>
              <Button variant="accent" size="sm">
                <Sparkles className="size-4" />
                Upgrade
              </Button>
            </div>
          </header>

          <div className="grid flex-1 gap-4 p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_340px]">
            <section className="flex min-h-[calc(100vh-140px)] flex-col justify-center">
              <div className="mx-auto w-full max-w-4xl animate-float-in">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/8">
                    <MessageCircle className="size-5 text-cyan-100" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Superego Composer</p>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                      What should your internet self say next?
                    </h2>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.065] shadow-[0_24px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
                  <div className="border-b border-white/10 p-3">
                    <div className="flex flex-wrap gap-2">
                      <Button variant="glass" size="sm">
                        <Wand2 className="size-4" />
                        Content Upgrade
                      </Button>
                      <Button variant="ghost" size="sm">
                        <GalleryHorizontalEnd className="size-4" />
                        Persona Tone
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Network className="size-4" />
                        Match Context
                      </Button>
                    </div>
                  </div>

                  <div className="p-3 md:p-4">
                    <textarea
                      className="min-h-36 w-full resize-none rounded-3xl border border-transparent bg-transparent p-4 text-lg leading-8 text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-white/10 focus:bg-black/10"
                      placeholder="A launch thought, a photo caption, a rough feeling..."
                    />

                    <div
                      onDragEnter={() => setIsDragging(true)}
                      onDragLeave={() => setIsDragging(false)}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => {
                        event.preventDefault();
                        setIsDragging(false);
                      }}
                      className={cn(
                        "mt-2 grid min-h-36 place-items-center rounded-3xl border border-dashed p-5 text-center transition-all duration-200",
                        isDragging
                          ? "border-cyan-200/70 bg-cyan-200/10 shadow-[0_0_42px_rgba(103,232,249,0.16)]"
                          : "border-white/14 bg-black/20 hover:border-white/25 hover:bg-black/25",
                      )}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="grid size-12 place-items-center rounded-2xl border border-white/12 bg-white/8">
                          <ImagePlus className="size-5 text-zinc-200" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-200">
                            Drop image or video
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            JPG, PNG, MP4, MOV
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="glass" size="sm">
                            <Cloud className="size-4" />
                            Upload
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Video className="size-4" />
                            Record
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-3 md:p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-zinc-200">
                          Channels
                        </p>
                        <p className="text-xs text-zinc-500">
                          {selected.length} selected
                        </p>
                      </div>
                      <Button
                        variant={allSelected ? "default" : "glass"}
                        size="sm"
                        onClick={toggleAll}
                      >
                        <Check className="size-4" />
                        All
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
                      {channels.map((channel) => {
                        const active = selected.includes(channel.name);

                        return (
                          <button
                            key={channel.name}
                            onClick={() => toggleChannel(channel.name)}
                            className={cn(
                              "group relative min-h-20 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-200",
                              active
                                ? "border-white/20 bg-white/12 shadow-[0_0_28px_rgba(255,255,255,0.08)]"
                                : "border-white/8 bg-white/[0.035] hover:border-white/16 hover:bg-white/[0.07]",
                            )}
                          >
                            <div
                              className={cn(
                                "mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r",
                                channel.color,
                              )}
                            />
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-zinc-100">
                                  {channel.name}
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                  {channel.tone}
                                </p>
                              </div>
                              <span
                                className={cn(
                                  "grid size-5 shrink-0 place-items-center rounded-full border transition",
                                  active
                                    ? "border-cyan-200/40 bg-cyan-200/20 text-cyan-100"
                                    : "border-white/12 text-transparent",
                                )}
                              >
                                <Check className="size-3" />
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Mic2 className="size-4 text-zinc-400" />
                        Draft queue ready
                      </div>
                      <Button size="lg" className="w-full md:w-auto">
                        Generate drafts
                        <Send className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="hidden min-h-full flex-col gap-4 xl:flex">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">Persona</p>
                    <h3 className="text-lg font-semibold">Soul Profile</h3>
                  </div>
                  <CircleUserRound className="size-5 text-cyan-100" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-zinc-500">Voice</p>
                    <p className="mt-2 text-xl font-semibold">Warm</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-zinc-500">Energy</p>
                    <p className="mt-2 text-xl font-semibold">Low</p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-zinc-500">Pattern</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Reflective, concise, image-led updates with a calm social
                    radius.
                  </p>
                </div>
              </div>

              <div className="flex-1 rounded-[28px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">Smart Networking</p>
                    <h3 className="text-lg font-semibold">Near Souls</h3>
                  </div>
                  <ArrowUpRight className="size-5 text-zinc-400" />
                </div>
                <div className="mt-6 space-y-3">
                  {["Mira Chen", "Alex Song", "Noah Lin"].map((name, index) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
                    >
                      <div className="grid size-10 place-items-center rounded-2xl bg-white/10 text-sm font-semibold">
                        {name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{name}</p>
                        <p className="text-xs text-zinc-500">
                          {92 - index * 4}% affinity
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" aria-label="Open match">
                        <Clapperboard className="size-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
