'use server';

/**
 * @fileOverview This file defines a Genkit flow for predicting the estimated time of arrival (ETA) of a vessel.
 *
 * - predictETA - A function that takes vessel information and predicts the ETA.
 * - ETAPredictionInput - The input type for the predictETA function.
 * - ETAPredictionOutput - The return type for the predictETA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ETAPredictionInputSchema = z.object({
  vesselNumber: z.string().describe('The vessel number to track.'),
  currentLocation: z.string().describe('The current location of the vessel.'),
  destinationPort: z.string().describe('The destination port of the vessel.'),
  historicalData: z.string().describe('Historical data of the vessel route and speed.'),
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
  prompt: `You are an AI assistant specialized in predicting the estimated time of arrival (ETA) for shipping vessels.

  Analyze the vessel's current location, historical data, and potential route options to predict the ETA at the destination port.
  Also, suggest potential route optimizations to improve the ETA.

Vessel Number: {{{vesselNumber}}}
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
