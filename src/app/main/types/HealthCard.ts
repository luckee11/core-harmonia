import { ChatIconByCategory } from '../main.enums';

export interface HealthCard {
	category: keyof typeof ChatIconByCategory
	description: string;
	id: string;
	title: string;
	isNew: boolean;
	hasChat: boolean;
}