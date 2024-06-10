<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Запись онайлн</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Администратор клиники с радостью ответит на ваши вопросы и запишет к нужному специалисту.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div class="w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5">
                    <div class="text-2xl font-semibold mb-2">Запись к специалисту</div>
                    <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Заполните форму, что бы мы могли связаться с вами.</div>
                    <input type="text" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500" placeholder="Ваше ФОИ">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500 mb-5" placeholder="Номер телефона">
                    <div class="w-full flex justify-center">
                        <button class="bg-slate-500 px-5 py-2 text-white">Записаться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>