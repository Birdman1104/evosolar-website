<template>
    <section id="cases">
        <h2>OUR PROJECTS</h2>
        <p class="cases-description">
            Lorem ipsum dolor sit amet consectetur. Ipsum consequat ac egestas vestibulum
            integer vivamus ullamcorper
            ultrices. Proin eu at tortor eget. Semper sed mattis volutpat urna at congue. Nibh arcu proin iaculis
            odio.
            Ridiculus lorem sit facilisi.
        </p>
        <div class="cases-section">
            <div class="case" v-for="(block, index) in cases" :key="index">
                <img src="../assets/images/service1.jpg" alt="" class="case-image">
                <div class="overlay"></div>

                <h3>{{ block.title }}</h3>
                <div class="units-wrapper">
                    <div class="unit-tools">
                        <div class="unit" v-for="(unit, index) in block.units" :key="index">
                            <div class="units-icon"><img src="../assets/icons/tool.png" alt="?"><span
                                    class="unit-name">{{ unit }}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" v-for="(service, index) in services" :key="index">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cases: [
                { title: 'Service', units: ['XY unit', 'YY unit'] },
                { title: 'Service', units: ['XX unit', 'XY unit', 'YY unit'] },
                { title: 'Service', units: ['XX unit', 'XY unit', 'YY unit'] },
                { title: 'Service', units: ['XX unit', 'YY unit'] },
                { title: 'Service', units: ['XX unit', 'XY unit', 'YY unit'] },
            ],
        };
    },
};
</script>

<style scoped>
#cases {
    background: #04210c;
    padding: 20px;
}

#cases h2 {
    color: white;
    font-size: 2rem;
    text-align: center;
}

#cases p {
    color: white;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 20px;
}

.cases-description {
    margin: 10 auto;
    font-size: 0.8rem;
    line-height: 1.6;
    font-weight: 100;
}

.cases-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    gap: 10px;
}

.case:nth-child(4n-3),
.case:nth-child(4n) {
    grid-column: span 7;
}

.case:nth-child(4n-2),
.case:nth-child(4n-1) {
    grid-column: span 5;
}

.case {
    border: 2px solid #ffffff;
    flex: 1 1 30%;
    position: relative;
    text-align: left;
    color: white;
    height: 300px;
}

.case-image {
    width: 100%;
    height: 300px;
}

.case,
.case-image,
.overlay {
    border-radius: 15px;
}

.case h3 {
    position: absolute;
    top: 75%;
    left: 15px;
    transform: translate(0, -50%);
}

.units-wrapper {
    position: absolute;
    top: 90%;
    left: 15px;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    background-color: #000000;
}

.case:only-child,
.case:last-child:nth-child(4n-3) {
    grid-column: span 12;
}

.unit {
    display: flex;
    align-items: center;
    justify-content: center;
}

.units-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.unit-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.units-icon img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

@media (max-width: 768px) {
    .cases-section {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
    }

    .cases-section .case {
        grid-column: span 12;
    }
}
</style>