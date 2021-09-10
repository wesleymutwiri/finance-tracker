<script>
	export let name, price, percentage, backgroundfrom, backgroundto;
</script>

<div
	class="tiny-card"
	style="background: {backgroundfrom};
    background: -webkit-linear-gradient(left, {backgroundfrom}, {backgroundto});
    background: -moz-linear-gradient(left, {backgroundfrom}, {backgroundto});
    background: linear-gradient(to left, {backgroundfrom}, {backgroundto});"
>
	<div class="tiny-header">
		{name}
	</div>
	<div class="tiny-body">
		<div class="price">
			<h5>
				{price}
			</h5>
		</div>
		<div class="percentage">
			{percentage}
		</div>
	</div>
</div>

<style>
	.tiny-card {
		width: 300px;
		min-width: 300px;
		/* height: 100px; */
		/* height: 140px; */
		border-radius: 1rem;
		padding: 1.5rem;
		color: #f5f3f6;
		margin: 0 1rem;
	}
	h5 {
		font-size: 1.4rem;
        margin: 0;
        padding: 1rem 0;
	}
	.tiny-body {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
