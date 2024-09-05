import { categories, Category } from '$lib/constants';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }): Category => {
	const categoryParam = params.category;

	const category = categories.find((c) => c.name === categoryParam);

	if (!category) {
		error(404, 'Not found');
	}
	return category;
};
