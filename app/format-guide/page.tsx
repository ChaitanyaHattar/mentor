"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SparklesCore } from "@/components/sparkles"
import { Bot, FileText, List, Type, Quote, LinkIcon, Table } from "lucide-react"
import Link from "next/link"

export default function FormatGuidePage() {
  const [citationStyle, setCitationStyle] = useState("apa")

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-white font-medium text-xl">Peerbud</span>
          </Link>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Research Paper Format Guide</h1>

          <Card className="border border-white/10 bg-black/50 backdrop-blur-md max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Academic Paper Formatting</CardTitle>
              <CardDescription className="text-gray-400">
                Learn the proper structure and formatting for academic research papers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="structure" className="mb-8">
                <TabsList className="grid w-full grid-cols-3 bg-black/50 mb-6">
                  <TabsTrigger value="structure">Paper Structure</TabsTrigger>
                  <TabsTrigger value="citations">Citations</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="structure">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="title">
                      <AccordionTrigger className="text-white">Title Page</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The title page should include:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Paper title (centered, bold, 14-16pt font)</li>
                            <li>Author name(s)</li>
                            <li>Institutional affiliation</li>
                            <li>Course name and number</li>
                            <li>Instructor name</li>
                            <li>Due date</li>
                          </ul>
                          <p>Follow your specific citation style guidelines for exact formatting requirements.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="abstract">
                      <AccordionTrigger className="text-white">Abstract</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The abstract should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Be 150-250 words</li>
                            <li>Summarize the key points of your research</li>
                            <li>Include your research question, methodology, results, and conclusions</li>
                            <li>Be written as a single paragraph</li>
                            <li>Not include citations</li>
                          </ul>
                          <p>The abstract appears on its own page after the title page.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="introduction">
                      <AccordionTrigger className="text-white">Introduction</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The introduction should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Present the research problem or question</li>
                            <li>Provide background information and context</li>
                            <li>Briefly review relevant literature</li>
                            <li>State your thesis or hypothesis</li>
                            <li>Outline the structure of your paper</li>
                          </ul>
                          <p>The introduction typically makes up about 10% of your paper's total length.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="methodology">
                      <AccordionTrigger className="text-white">Methodology</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The methodology section should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Describe your research design</li>
                            <li>Explain data collection methods</li>
                            <li>Detail analysis procedures</li>
                            <li>Address limitations and assumptions</li>
                            <li>Be written in past tense</li>
                          </ul>
                          <p>Be specific enough that another researcher could replicate your study.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="results">
                      <AccordionTrigger className="text-white">Results</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The results section should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Present findings without interpretation</li>
                            <li>Use tables, figures, and graphs where appropriate</li>
                            <li>Organize results logically (chronologically, by importance, or by hypothesis)</li>
                            <li>Use subheadings for clarity</li>
                          </ul>
                          <p>Focus on reporting data, not explaining its significance.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="discussion">
                      <AccordionTrigger className="text-white">Discussion</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The discussion section should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Interpret your results</li>
                            <li>Connect findings to your research question</li>
                            <li>Compare results with previous research</li>
                            <li>Explain unexpected findings</li>
                            <li>Address limitations</li>
                            <li>Suggest implications and future research</li>
                          </ul>
                          <p>This is where you explain what your results mean in the broader context of your field.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="conclusion">
                      <AccordionTrigger className="text-white">Conclusion</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The conclusion should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Summarize key findings</li>
                            <li>Restate the significance of your research</li>
                            <li>Provide closure to your argument</li>
                            <li>Avoid introducing new information</li>
                          </ul>
                          <p>The conclusion is typically 5-10% of your paper's total length.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="references">
                      <AccordionTrigger className="text-white">References</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <p>The references section should:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Begin on a new page</li>
                            <li>List all sources cited in your paper</li>
                            <li>Follow your chosen citation style (APA, MLA, Chicago, etc.)</li>
                            <li>Be alphabetized by author's last name</li>
                            <li>Use hanging indentation (if required by your citation style)</li>
                          </ul>
                          <p>Double-check that every in-text citation has a corresponding reference entry.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="citations">
                  <div className="space-y-6">
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex rounded-md shadow-sm">
                        <Button
                          variant={citationStyle === "apa" ? "default" : "outline"}
                          className={citationStyle === "apa" ? "bg-purple-600" : "text-white border-white/20"}
                          onClick={() => setCitationStyle("apa")}
                        >
                          APA
                        </Button>
                        <Button
                          variant={citationStyle === "mla" ? "default" : "outline"}
                          className={citationStyle === "mla" ? "bg-purple-600" : "text-white border-white/20"}
                          onClick={() => setCitationStyle("mla")}
                        >
                          MLA
                        </Button>
                        <Button
                          variant={citationStyle === "chicago" ? "default" : "outline"}
                          className={citationStyle === "chicago" ? "bg-purple-600" : "text-white border-white/20"}
                          onClick={() => setCitationStyle("chicago")}
                        >
                          Chicago
                        </Button>
                      </div>
                    </div>

                    {citationStyle === "apa" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">APA Style (7th Edition)</h3>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Book
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Author, A. A. (Year). <em>Title of book</em>. Publisher.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Brown, D. (2003). <em>The Da Vinci code</em>. Doubleday.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Journal Article
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Journal</em>,{" "}
                            <em>volume</em>(issue), page range. DOI or URL
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Grady, J. S., Her, M., Moreno, G., Perez, C., & Yelinek, J. (2019). Emotions in storybooks:
                            A comparison of storybooks that represent ethnic and racial groups in the United States.{" "}
                            <em>Psychology of Popular Media Culture</em>, <em>8</em>(3), 207–217.
                            https://doi.org/10.1037/ppm0000185
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <LinkIcon className="h-5 w-5 mr-2 text-purple-400" />
                            Website
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Author, A. A. or Group Name. (Year, Month Day). Title of page. Site Name. URL
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Centers for Disease Control and Prevention. (2020, October 28). How to protect yourself &
                            others. https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <Quote className="h-5 w-5 mr-2 text-purple-400" />
                            In-text Citation
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">(Author, Year) or Author (Year)</p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Research has shown that... (Smith, 2020) or Smith (2020) argued that...
                          </p>
                        </div>
                      </div>
                    )}

                    {citationStyle === "mla" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">MLA Style (9th Edition)</h3>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Book
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Last Name, First Name. <em>Title of Book</em>. Publisher, Publication Date.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Gaiman, Neil. <em>Norse Mythology</em>. W.W. Norton & Company, 2017.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Journal Article
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Author(s). "Title of Article." <em>Title of Journal</em>, Volume, Issue, Publication Date,
                            page range. Database Name (if applicable), DOI or URL.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Kincaid, Jamaica. "In History." <em>Callaloo</em>, vol. 24, no. 2, Spring 2001, pp. 620-26.
                            JSTOR, www.jstor.org/stable/3300524.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <LinkIcon className="h-5 w-5 mr-2 text-purple-400" />
                            Website
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            Author. "Title of Web Page." <em>Title of Website</em>, Publisher or Sponsor, Date of
                            Publication, URL. Accessed Day Month Year.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Cain, Kevin. "The Negative Effects of Facebook on Communication."{" "}
                            <em>Social Media Today</em>, 29 June 2018,
                            www.socialmediatoday.com/negative-effects-facebook-communication. Accessed 20 July 2019.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <Quote className="h-5 w-5 mr-2 text-purple-400" />
                            In-text Citation
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            (Author's Last Name Page Number) or Author's Last Name states that "..." (Page Number).
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            The author explains, "quoted text" (Smith 45). or Smith argues that "quoted text" (45).
                          </p>
                        </div>
                      </div>
                    )}

                    {citationStyle === "chicago" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Chicago Style (17th Edition)</h3>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Book
                          </h4>
                          <p className="text-gray-300 mb-2">Format (Bibliography):</p>
                          <p className="text-gray-400 italic mb-2">
                            Last Name, First Name. <em>Title of Book</em>. Place of Publication: Publisher, Year of
                            Publication.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Pollan, Michael. <em>The Omnivore's Dilemma: A Natural History of Four Meals</em>. New York:
                            Penguin, 2006.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-purple-400" />
                            Journal Article
                          </h4>
                          <p className="text-gray-300 mb-2">Format (Bibliography):</p>
                          <p className="text-gray-400 italic mb-2">
                            Last Name, First Name. "Title of Article." <em>Title of Journal</em> Volume, no. Issue
                            (Year): Page range. DOI or URL.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Weinstein, Joshua I. "The Market in Plato's Republic." <em>Classical Philology</em> 104, no.
                            4 (2009): 439–58. https://doi.org/10.1086/650979.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <LinkIcon className="h-5 w-5 mr-2 text-purple-400" />
                            Website
                          </h4>
                          <p className="text-gray-300 mb-2">Format (Bibliography):</p>
                          <p className="text-gray-400 italic mb-2">
                            Last Name, First Name. "Title of Web Page." <em>Title of Website</em>. Publishing
                            Organization, Publication or revision date. Access date. URL.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            Thornton, Stephen. "Karl Popper." <em>Stanford Encyclopedia of Philosophy</em>. Stanford
                            University, July 28, 2017. Accessed January 2, 2018.
                            https://plato.stanford.edu/entries/popper/.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                            <Quote className="h-5 w-5 mr-2 text-purple-400" />
                            Footnote/Endnote Citation
                          </h4>
                          <p className="text-gray-300 mb-2">Format:</p>
                          <p className="text-gray-400 italic mb-2">
                            First Name Last Name, <em>Title of Book</em> (Place of Publication: Publisher, Year of
                            Publication), Page number.
                          </p>
                          <p className="text-gray-300 mb-2">Example:</p>
                          <p className="text-gray-400">
                            1. Michael Pollan, <em>The Omnivore's Dilemma: A Natural History of Four Meals</em> (New
                            York: Penguin, 2006), 99-100.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="examples">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Sample Paper Elements</h3>

                    <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                      <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                        <Type className="h-5 w-5 mr-2 text-purple-400" />
                        Title Page Example
                      </h4>
                      <div className="p-6 bg-white/5 rounded-lg text-center space-y-6">
                        <p className="text-white font-bold text-xl">
                          The Impact of Climate Change on Global Biodiversity
                        </p>
                        <p className="text-gray-300">By</p>
                        <p className="text-gray-300">Jane Smith</p>
                        <p className="text-gray-300">Department of Environmental Science</p>
                        <p className="text-gray-300">University of Example</p>
                        <p className="text-gray-300">ENVS 401: Advanced Environmental Studies</p>
                        <p className="text-gray-300">Professor Robert Johnson</p>
                        <p className="text-gray-300">May 15, 2023</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                      <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                        <List className="h-5 w-5 mr-2 text-purple-400" />
                        Abstract Example
                      </h4>
                      <div className="p-6 bg-white/5 rounded-lg">
                        <p className="text-white font-bold mb-4 text-center">Abstract</p>
                        <p className="text-gray-300">
                          This study examines the impact of climate change on global biodiversity through a
                          meta-analysis of recent research. The findings indicate that rising global temperatures are
                          significantly affecting species distribution, migration patterns, and extinction rates across
                          terrestrial, marine, and freshwater ecosystems. Data from 150 peer-reviewed studies published
                          between 2010 and 2022 were analyzed, revealing that approximately 25% of studied species show
                          vulnerability to climate-related extinction by 2050 if current warming trends continue. The
                          research highlights the urgent need for comprehensive conservation strategies that
                          specifically address climate change threats to biodiversity. These findings contribute to the
                          growing body of evidence supporting immediate action to mitigate climate change impacts on
                          global ecosystems.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                      <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                        <Table className="h-5 w-5 mr-2 text-purple-400" />
                        Table Example
                      </h4>
                      <div className="p-6 bg-white/5 rounded-lg">
                        <p className="text-white font-bold mb-4 text-center">Table 1</p>
                        <p className="text-white text-center mb-2">
                          Species Vulnerability to Climate Change by Ecosystem Type
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-gray-300">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="p-2 text-left">Ecosystem Type</th>
                                <th className="p-2 text-center">Number of Species Studied</th>
                                <th className="p-2 text-center">Percentage at Risk</th>
                                <th className="p-2 text-center">Primary Threat Factor</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-white/10">
                                <td className="p-2">Terrestrial</td>
                                <td className="p-2 text-center">450</td>
                                <td className="p-2 text-center">28%</td>
                                <td className="p-2 text-center">Habitat loss</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="p-2">Marine</td>
                                <td className="p-2 text-center">320</td>
                                <td className="p-2 text-center">31%</td>
                                <td className="p-2 text-center">Ocean acidification</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="p-2">Freshwater</td>
                                <td className="p-2 text-center">180</td>
                                <td className="p-2 text-center">42%</td>
                                <td className="p-2 text-center">Temperature increase</td>
                              </tr>
                              <tr>
                                <td className="p-2">Polar</td>
                                <td className="p-2 text-center">95</td>
                                <td className="p-2 text-center">68%</td>
                                <td className="p-2 text-center">Ice loss</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 italic text-center">
                          Note: Data compiled from meta-analysis of 150 studies published between 2010-2022.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Complete Format Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

