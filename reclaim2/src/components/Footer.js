export default function Footer() {
  return (
    <footer class="mt-2 shadow bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Sell
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Lost and Found
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Chat
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
