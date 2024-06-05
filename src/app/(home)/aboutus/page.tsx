import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function AboutUs() {
  return (
    <>
      <main className="grid grid-rows-2 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="text-center mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme Inc. was founded in 2010 with the goal of revolutionizing
                the way businesses approach technology. Over the years,
                we&apos;ve grown into a leading provider of innovative solutions
                that help our clients thrive in a rapidly changing digital
                landscape.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-3">
                <CalendarDaysIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">2010</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Acme Inc. was founded with a mission to empower businesses
                    through innovative technology.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <RocketIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">2015</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We launched our flagship product, revolutionizing the way
                    businesses approach digital transformation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <UsersIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">2020</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our customer base grew to over 10,000 businesses across
                    multiple industries.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <AwardIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <div className="text-center">
                  <h4 className="text-lg font-medium">2022</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Acme Inc. was recognized as one of the top technology
                    companies in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center  md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of dedicated professionals is the backbone of Acme Inc.
                Get to know the individuals who make our company great.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Dhruv Sehgal</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO & Co-Founder
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dhruv is a visionary leader with a passion for driving
                    innovation and growth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="John Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>OW</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Ojusvi Wadhwa</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CTO & Co-Founder
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ojusvi is a technical visionary who leads our engineering
                    team with expertise and innovation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    alt="Emily Johnson"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>HHS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Hamid Hussian Siddqui</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Head of Marketing
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Hamid is a marketing strategist who drives our brand and
                    customer engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    alt="Michael Brown"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Pratham Poddar</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Head of Sales
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pratham is a sales leader who helps our clients achieve
                    their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
