import { HealthCard } from "./HealthCard";

export interface HealthCardState {
	cards: HealthCard[];
	isHealthCardsLoading: boolean;
}