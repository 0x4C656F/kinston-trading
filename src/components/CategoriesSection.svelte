<script>
	import Icon from '@iconify/svelte';

	const categories = [
		{
			name: 'Lights',
			image: '/images/lamp.webp',
			icon: 'lucide:lamp',
			href: '/lamp',
			description: 'Discover our stunning collection of lamps and lighting fixtures.'
		},
		{
			name: 'Sofas',
			image: '/images/sofa.webp',
			icon: 'lucide:sofa',
			href: '/sofa',
			description: 'Explore our comfortable and stylish sofa collection.'
		},
		{
			name: 'Coffee Tables',
			icon: 'lucide:table',
			href: '/coffee-table',
			image: '/images/coffee-table.webp',
			description: 'Elevate your living space with our stylish coffee tables.'
		},
		{
			name: 'TV Stands',
			icon: 'lucide:tv',
			href: '/tv-stand',
			image: '/images/tv-stand.webp',
			description: 'Find the perfect TV stand to complement your home decor.'
		},
		{
			name: 'Beds',
			icon: 'lucide:bed',
			image: '/images/bed.webp',
			href: '/bed',
			description: 'Experience comfort and style with our bed collection.'
		},
		{
			name: 'Dining Tables',
			image: '/images/dining-table.webp',
			icon: 'lucide:table-fork-knife',
			href: '/dining-table',
			description: 'Gather around our elegant and durable dining tables.'
		},
		{
			name: 'Chairs',
			image: '/images/chair.webp',
			icon: 'lucide:chair',
			href: '/chair',
			description: 'Sit comfortably with our wide range of stylish chairs.'
		},
		{
			name: 'Wardrobes',
			image: '/images/wardrobe.webp',
			icon: 'lucide:wardrobe',
			href: '/wardrobe',
			description: 'Organize your space with our functional and stylish wardrobes.'
		},
		{
			name: 'Bookshelves',
			image: '/images/bookshelf.webp',
			icon: 'lucide:bookshelf',
			href: '/bookshelf',
			description: 'Showcase your collection with our modern bookshelves.'
		},
		{
			name: 'Office Desks',
			image: '/images/office-desk.webp',
			icon: 'lucide:desk',
			href: '/office-desk',
			description: 'Boost productivity with our ergonomic office desks.'
		},
		{
			name: 'Mirrors',
			image: '/images/mirror.webp',
			icon: 'lucide:mirror',
			href: '/mirror',
			description: 'Brighten up your space with our stylish mirrors.'
		},
		{
			name: 'Shelves',
			image: '/images/shelf.webp',
			icon: 'lucide:shelves',
			href: '/shelves',
			description: 'Maximize storage and display space with our versatile shelves.'
		},
		{
			name: 'Outdoor Furniture',
			image: '/images/outdoor-furniture.webp',
			icon: 'lucide:outdoor-furniture',
			href: '/outdoor-furniture',
			description: 'Relax in style with our durable outdoor furniture.'
		},
		{
			name: 'Dressers',
			image: '/images/dresser.webp',
			icon: 'lucide:dresser',
			href: '/dresser',
			description: 'Keep your essentials organized with our sleek dressers.'
		}
	];
</script>

<section class="bg-muted py-12 md:py-24 w-full flex items-center rounded-t-[5%] flex-col lg:py-32">
	<div class=" max-w-screen-2xl w-full gap-8 px-4 md:px-6">
		<div class="space-y-4 w-full">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
				Furniture Categories
			</h2>
			<p
				class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Explore our extensive collection of high-quality furniture, carefully curated to meet the
				diverse needs of our customers in Ukraine.
			</p>
			<div class="flex flex-wrap w-full gap-4">
				{#each categories as category}
					<a
						class="group flex w-80 flex-col items-start gap-2 rounded-lg bg-background p-4 transition-all hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
						href={category.href}
					>
						<img
							src={category.image}
							width="300"
							height="300"
							alt={category.name}
							class="aspect-square object-cover rounded-lg"
						/>
						<div class="flex flex-col items-start gap-1">
							<Icon icon={category.icon} class="h-8 w-8 text-primary" />
							<h3 class="text-lg font-semibold group-hover:underline">{category.name}</h3>
							<p class="text-muted-foreground">{category.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
