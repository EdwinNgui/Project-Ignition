import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  
// Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Dashboard Check (Inbox)",
      url: "/dashboard",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/dashboard",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/dashboard",
      icon: Search,
    },
    {
      title: "Settings",
      url: "/dashboard",
      icon: Settings,
    },
  ]

  const taskItems = [
    {
      title: "Task 1 - Easy",
      url: "/task-1",
      icon: Home,
    },
    {
      title: "Task 2 - Medium",
      url: "/task-2",
      icon: Inbox,
    },
    {
      title: "Task 3 - Hard",
      url: "/task-3",
      icon: Calendar,
    },
    {
      title: "Task 4 - Typescript Refresher",
      url: "/task-4",
      icon: Search,
    },
    {
      title: "Task 5",
      url: "/task-5",
      icon: Settings,
    },
  ]

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                        )}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup />

            <SidebarGroup>
                <SidebarGroupLabel>Tasks</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {taskItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                        )}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  