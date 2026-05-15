import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <Section
      id="contact"
      label="// contact"
      title="Let's talk robots."
      description="Always happy to chat about robot learning, semantic navigation, dexterous manipulation, or anything embodied AI."
    >
      <div className="surface p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.links.email}`}
            className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60"
          >
            <Mail
              size={18}
              className="mt-0.5 text-accent transition-transform group-hover:scale-110"
            />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
                Email
              </div>
              <div className="mt-0.5 text-sm text-ink">
                {profile.links.email}
              </div>
            </div>
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60"
          >
            <Github
              size={18}
              className="mt-0.5 text-accent transition-transform group-hover:scale-110"
            />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
                GitHub
              </div>
              <div className="mt-0.5 text-sm text-ink">github.com/esteb37</div>
            </div>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/60"
          >
            <Linkedin
              size={18}
              className="mt-0.5 text-accent transition-transform group-hover:scale-110"
            />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
                LinkedIn
              </div>
              <div className="mt-0.5 text-sm text-ink">
                /in/esteban-padilla-cerdio
              </div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
