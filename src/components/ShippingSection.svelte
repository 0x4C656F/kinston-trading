<script>
	import Icon from '@iconify/svelte';

	const shippingFeatures = [
		{
			title: 'Fast Delivery',
			description:
				'We offer expedited shipping options to get your furniture to you as quickly as possible, with delivery times typically within 2-3 weeks.'
		},
		{
			title: 'Competitive Pricing',
			description:
				'Our shipping rates are highly competitive, with transparent pricing that includes all applicable taxes and duties.'
		},
		{
			title: 'Secure Delivery',
			description:
				'Your furniture is carefully packaged and shipped with trusted carriers, ensuring it arrives in perfect condition.'
		}
	];
</script>

<section
	class="bg-background rounded-t-[5%] flex flex-col w-full items-center py-12 md:py-24 lg:py-32"
>
	<div class="flex max-w-screen-2xl items-center gap-8 px-4 md:px-6">
		<img
			src="/images/placeholder.svg"
			width="550"
			height="550"
			alt="Shipping"
			class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
		/>
		<div class="space-y-4">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
				Reliable Shipping to Ukraine
			</h2>
			<p
				class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				We understand the importance of timely and secure delivery to Ukraine. Our shipping process
				is streamlined and efficient, ensuring your furniture arrives in pristine condition within
				the estimated delivery timeframe.
			</p>
			<ul class="grid gap-4">
				{#each shippingFeatures as feature}
					<li class="flex items-start gap-2">
						<Icon icon="lucide:check" class="mt-1 h-5 w-5 text-primary" />
						<div>
							<h3 class="font-semibold">{feature.title}</h3>
							<p class="text-muted-foreground">{feature.description}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
