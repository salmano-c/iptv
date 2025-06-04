
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import TypedText from "@/components/ui/TypedText";
import { Tv, Smartphone, MonitorSmartphone, Tablet, Laptop, Check } from "lucide-react";

// Installation guides for different platforms
const platforms = [
  {
    id: "smarttv",
    name: "Smart TV",
    icon: Tv,
    steps: [
      "Download the IPTV Smarters app from your TV's app store",
      "Open the app and select 'Add New User'",
      "Enter your username, password and portal URL",
      "Press 'Add User' and enjoy your content"
    ]
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    steps: [
      "Download IPTV Smarters Pro from Google Play Store",
      "Open the app and tap on 'Add User'",
      "Enter your login credentials and URL",
      "Tap 'Add User' to start streaming"
    ]
  },
  {
    id: "ios",
    name: "iOS",
    icon: Tablet,
    steps: [
      "Download GSE IPTV from the App Store",
      "Open and tap 'Add New Playlist'",
      "Select 'M3U URL' and enter your subscription details",
      "Tap 'Add' and start watching"
    ]
  },
  {
    id: "firestick",
    name: "Amazon Firestick",
    icon: MonitorSmartphone,
    steps: [
      "Go to Settings > Device > Developer options",
      "Enable 'Apps from Unknown Sources'",
      "Download the Downloader app and install IPTV Smarters Pro",
      "Open app and enter your login details"
    ]
  },
  {
    id: "windows",
    name: "Windows PC",
    icon: Laptop,
    steps: [
      "Download VLC Media Player or IPTV Smarters for Windows",
      "Open the app and select 'Open Network Stream'",
      "Enter your M3U playlist URL",
      "Click 'Play' to start streaming"
    ]
  }
];

export function InstallGuide() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);

  return (
    <section id="install" className="py-20 bg-gradient-to-b from Box-darkest to Box-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <TypedText
              text="Easy Setup on Any Device"
              className="text-gradient"
              delay={100}
            />
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Set up BoxIPTV on your preferred device in just a few simple steps
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                selectedPlatform.id === platform.id
                  ? "bg Box-neon-blue text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <platform.icon className="w-4 h-4" />
              <span>{platform.name}</span>
            </button>
          ))}
        </div>

        {/* Installation Guide */}
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="bg Box-neon-blue/20 p-6 rounded-full">
                <selectedPlatform.icon className="w-16 h-16 text Box-neon-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Setting up BoxIPTV on {selectedPlatform.name}
                </h3>
                <p className="text-white/70">
                  Follow these simple steps to get started with BoxIPTV on your {selectedPlatform.name} device.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {selectedPlatform.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg Box-neon-blue/20 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text Box-neon-blue font-medium">{index + 1}</span>
                  </div>
                  <div className="pt-1">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Check className="w-5 h-5 text Box-neon-green" />
                Need Help?
              </h4>
              <p className="text-sm text-white/70">
                If you encounter any issues during setup, our technical support team is available 24/7. 
                Just contact us through WhatsApp and we'll help you get started.
              </p>
              <div className="mt-4">
                <a
                  href="https://wa.me/212657263966?text=I need help setting up BoxIPTV on my device"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  Get Setup Help
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        <div id="reseller" className="mt-16 max-w-3xl mx-auto">
          <GlassCard className="p-8 text-center border border Box-neon-green/30">
            <h3 className="text-2xl font-bold mb-3 text-gradient">Become a Reseller</h3>
            <p className="mb-6 text-white/70">
              Start your own IPTV business with our reseller program. Get wholesale pricing, 
              dedicated support, and marketing materials.
            </p>
            <a
              href="https://wa.me/212657263966?text=I'm interested in becoming a reseller"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block"
            >
              Start Reselling
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default InstallGuide;
