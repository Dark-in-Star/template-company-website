'use server';
import {
  summarizeBrochure as summarizeBrochureFlow,
  type SummarizeBrochureInput,
} from '@/ai/flows/brochure-summarization';

export async function summarizeBrochureAction(
  input: SummarizeBrochureInput
) {
  try {
    const result = await summarizeBrochureFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
