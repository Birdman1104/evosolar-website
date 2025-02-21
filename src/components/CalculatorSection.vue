<template>
    <div class="calculator-section">
        <h2>Calculator</h2>
        <p class="calculator-description">Lorem ipsum dolor sit amet consectetur. Ipsum consequat ac egestas vestibulum
            integer vivamus ullamcorper
            ultrices. Proin eu at tortor eget. Semper sed mattis volutpat urna at congue. Nibh arcu proin iaculis odio.
            Ridiculus lorem sit facilisi.
        </p>

        <div class="form-container">
            <div class="form-group">
                <div class="label">Օգտագործման վայրը</div>
                <div class="toggle">
                    <input type="radio" id="mode1" name="mode" checked>
                    <label for="mode1">Տան համար</label>
                    <input type="radio" id="mode2" name="mode">
                    <label for="mode2">Բիզնեսի համար</label>
                </div>
            </div>

            <div class="form-group">
                <div class="label">Էլեկտրականության սպառման միչին արժեքը</div>
                <div class="toggle">
                    <input type="radio" id="option1" name="option" checked>
                    <label for="option1">Դրամ</label>
                    <input type="radio" id="option2" name="option">
                    <label for="option2">Կվտ*Հ</label>
                </div>
            </div>

            <div class="form-group">
                <div class="label">Միջին ամսական արժեքը հհ դրամ/կՎտ*Հ</div>
                <input type="number" placeholder="">
            </div>

            <div class="form-group">
                <div class="label">Էլեկտրաէներգիայի միջին տարեկան արժեքը հհ դրամ/կՎտժ</div>
                <input type="number" value="0">
            </div>

            <div class="form-group">
                <div class="label">Գավաֆիկացված է</div>
                <div class="toggle">
                    <input type="radio" id="gas1" name="gas" checked>
                    <label for="gas1">Այո</label>
                    <input type="radio" id="gas2" name="gas">
                    <label for="gas2">Ոչ</label>
                </div>
            </div>

            <div class="form-group">
                <div class="label">Տանն ապրող մարդկանց թիվը</div>
                <input type="number" placeholder="1">
            </div>

            <div class="form-group">
                <div class="label">Տարածաշրջան</div>
                <select>
                    <option value="yerevan" selected>Երևան</option>
                    <option value="aragatsotn">Արագածոտն</option>
                    <option value="ararat">Արարատ</option>
                    <option value="armavir">Արմավիր</option>
                    <option value="gegarkhunik">Գեղարքունիք</option>
                    <option value="kotayk">Կոտայք</option>
                    <option value="lori">Լոռի</option>
                    <option value="shirak">Շիրակ</option>
                    <option value="syunik">Սյունիք</option>
                    <option value="tavush">Տավուշ</option>
                    <option value="vayots-dzor">Վայոց Ձոր</option>
                </select>
            </div>

            <button class="submit-btn">Հաշվել</button>
        </div>
    </div>
</template>

<style scoped>
.calculator-section {
    background: #04210c;
    padding: 50px 20px;
    color: white;
    text-align: center;
}

.calculator-description {
    max-width: 800px;
    margin: 10 auto;
    font-size: 0.8rem;
    line-height: 1.6;
    font-weight: 100;
}

.form-container {
    color: rgb(243, 243, 243);
    padding: 20px;
    /* border-radius: 8px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    font-size: 0.8rem;
    max-width: 700px;
    margin: auto;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.form-group:last-child {
    border-bottom: none;
}

.label {
    display: flex;
    align-items: center;
    text-align: left;
}

.label:before {
    content: "";
    width: 4px;
    height: 20px;
    background: #e5b400;
    margin-right: 10px;
}

input[type="number"],
select {
    width: 25%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.toggle {
    display: flex;
    align-items: center;
}

.toggle input {
    display: none;
}

.toggle label {
    cursor: pointer;
    background: #ddd;
    padding: 5px 15px;
    border-radius: 20px;
    margin: 0 5px;
}

.toggle input:checked+label {
    background: #e5b400;
    color: white;
}

.submit-btn {
    background: #2c2f3b;
    color: white;
    margin: 15px auto;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
}
</style>