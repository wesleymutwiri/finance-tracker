<div class="card-container">
    <div class="card-header">
    <slot name="card-header">
        nothing 
    </slot>
    </div>

    <div class="card-body">
    <slot name="card-body">
        nothing
    </slot>
    </div>

</div>

<style>
    .card-container {
        background: #fff;
        width: max-content;
        padding: 2rem;
        border-radius: 8px;
        margin: 1rem;
    }
</style>