'use server';

/**
 * @fileOverview A brochure summarization AI agent.
 *
 * - summarizeBrochure - A function that handles the brochure summarization process.
 * - SummarizeBrochureInput - The input type for the summarizeBrochure function.
 * - SummarizeBrochureOutput - The return type for the summarizeBrochure function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { readBrochure } from '@/services/readBrochure';

const SummarizeBrochureInputSchema = z.object({
  brochureUrl: z
    .string()
    .describe("The URL of the brochure to summarize."),
});
export type SummarizeBrochureInput = z.infer<typeof SummarizeBrochureInputSchema>;

const SummarizeBrochureOutputSchema = z.object({
  summary: z.string().describe('A summary of the brochure content, highlighting key services.'),
});
export type SummarizeBrochureOutput = z.infer<typeof SummarizeBrochureOutputSchema>;

export async function summarizeBrochure(input: SummarizeBrochureInput): Promise<SummarizeBrochureOutput> {
  return summarizeBrochureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBrochurePrompt',
  input: {schema: z.object({ brochureContent: z.string() })},
  output: {schema: SummarizeBrochureOutputSchema},
  prompt: `You are an expert marketing assistant. Your task is to summarize the content of a brochure, highlighting key services offered.  The brochure content will be passed to you in raw text form.

Brochure Content: {{{brochureContent}}}`,
});

const summarizeBrochureFlow = ai.defineFlow(
  {
    name: 'summarizeBrochureFlow',
    inputSchema: SummarizeBrochureInputSchema,
    outputSchema: SummarizeBrochureOutputSchema,
  },
  async input => {
    const brochureContent = await readBrochure(input.brochureUrl);
    const {output} = await prompt({brochureContent});
    return output!;
  }
);
