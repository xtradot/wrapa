import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "Business Owner",
    location: "Lagos",
    content:
      "WRAPA made getting motor insurance so easy. I compared quotes from 5 providers in minutes and saved over ₦50,000 on my premium. The whole process was seamless!",
    rating: 5,
    product: "Motor Insurance",
    avatar: "CO",
  },
  {
    name: "Emeka Nwosu",
    role: "Software Developer",
    location: "Abuja",
    content:
      "I was skeptical about buying insurance online, but WRAPA's process was transparent and secure. Got my health insurance policy delivered to my email instantly.",
    rating: 5,
    product: "Health Insurance",
    avatar: "EN",
  },
  {
    name: "Aisha Mohammed",
    role: "Healthcare Professional",
    location: "Kano",
    content:
      "The claims process was surprisingly smooth. When I needed to file a travel insurance claim, the support team guided me through every step. Highly recommended!",
    rating: 5,
    product: "Travel Insurance",
    avatar: "AM",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Estate Manager",
    location: "Ibadan",
    content:
      "Finally, an insurance platform that understands Nigerians! The home insurance options were comprehensive and the pricing was very competitive. Great experience overall.",
    rating: 5,
    product: "Home Insurance",
    avatar: "OA",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of Nigerians who trust WRAPA for their insurance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>

                <Badge variant="secondary" className="mt-4 w-fit text-xs">
                  {testimonial.product}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
