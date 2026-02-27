"use client"

import { useState } from "react"
import { Shield, Globe, Bell, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function AdminSettings() {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Platform Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Configure verification thresholds and platform behavior.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Trust Score Settings */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <Shield className="size-5 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Verification Thresholds</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="min-trust" className="mb-1.5 block text-sm font-medium text-foreground">
                  Minimum Trust Score
                </label>
                <Input id="min-trust" type="number" defaultValue="60" className="rounded-xl" />
                <p className="mt-1 text-xs text-muted-foreground">
                  Products below this score get flagged automatically.
                </p>
              </div>
              <div>
                <label htmlFor="flag-threshold" className="mb-1.5 block text-sm font-medium text-foreground">
                  Flag Review Threshold
                </label>
                <Input id="flag-threshold" type="number" defaultValue="70" className="rounded-xl" />
                <p className="mt-1 text-xs text-muted-foreground">
                  Score below which products enter manual review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Geo Settings */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <Globe className="size-5 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Geo-Validation</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Auto-flag geo mismatches</p>
                <p className="text-xs text-muted-foreground">
                  Automatically flag products with location mismatches.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Require seller location</p>
                <p className="text-xs text-muted-foreground">
                  Sellers must provide location data when listing.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <Bell className="size-5 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">New seller applications</p>
                <p className="text-xs text-muted-foreground">
                  Get notified when a new seller registers.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Flagged product alerts</p>
                <p className="text-xs text-muted-foreground">
                  Receive alerts when products are flagged.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <Lock className="size-5 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Security</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="api-key" className="mb-1.5 block text-sm font-medium text-foreground">
                QR Verification API Key
              </label>
              <Input id="api-key" type="password" defaultValue="va-api-key-xxxxx" className="rounded-xl font-mono" />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} size="lg" className="w-full rounded-full sm:w-auto">
          {saved ? "Settings Saved" : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
