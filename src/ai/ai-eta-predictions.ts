'use server';

/**
 * @fileOverview This file defines a Genkit flow for predicting the estimated time of arrival (ETA) of a shipping container.
 *
 * - predictETA - A function that takes container information and predicts the ETA.
 * - ETAPredictionInput - The input type for the predictETA function.
 * - ETAPredictionOutput - The return type for the predictETA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ETAPredictionInputSchema = z.object({
  containerNumber: z.string().describe('The container number to track.'),
  currentLocation: z.string().describe('The current location of the container.'),
  destinationPort: z.string().describe('The destination port of the container.'),
  historicalData: z.string().describe('Historical data of the route and speed.'),
});

export type ETAPredictionInput = z.infer<typeof ETAPredictionInputSchema>;

const ETAPredictionOutputSchema = z.object({
  estimatedTimeOfArrival: z.string().describe('The predicted estimated time of arrival at the destination port.'),
  routeOptimizations: z.string().describe('Potential route optimizations to improve ETA.'),
});

export type ETAPredictionOutput = z.infer<typeof ETAPredictionOutputSchema>;

export async function predictETA(input: ETAPredictionInput): Promise<ETAPredictionOutput> {
  return predictETAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'etaPredictionPrompt',
  input: {schema: ETAPredictionInputSchema},
  output: {schema: ETAPredictionOutputSchema},
  prompt: `You are an AI assistant specialized in predicting the estimated time of arrival (ETA) for shipping containers.

  Analyze the container's current location, historical data, and potential route options to predict the ETA at the destination port.
  Also, suggest potential route optimizations to improve the ETA.

Container Number: {{{containerNumber}}}
Current Location: {{{currentLocation}}}
Destination Port: {{{destinationPort}}}
Historical Data: {{{historicalData}}}

Provide the estimated time of arrival and potential route optimizations.`,
});

const predictETAFlow = ai.defineFlow(
  {
    name: 'predictETAFlow',
    inputSchema: ETAPredictionInputSchema,
    outputSchema: ETAPredictionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
