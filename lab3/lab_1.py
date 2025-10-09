import math

def f(x):
    """Исходная функция"""
    return (x - 4)**2 + math.log(x)

def f_prime(x):
    """Первая производная функции"""
    return 2*(x - 4) + 1/x

def f_double_prime(x):
    """Вторая производная функции"""
    return 2 - 1/(x**2)

def bisection_method(a, b, tol=1e-6):
    """Метод деления пополам"""
    delta = tol / 3
    iterations = 0
    
    while (b - a) > tol:
        iterations += 1
        mid = (a + b) / 2
        x1 = mid - delta
        x2 = mid + delta
        
        if f(x1) < f(x2):
            b = mid
        else:
            a = mid
    
    x_min = (a + b) / 2
    return x_min, f(x_min), iterations

# Метод первого порядка
def tangent_method(a, b, tol=1e-6, max_iter=1000):
    """Метод касательных"""
    iteration = 0
    for i in range(max_iter):
        iteration += 1
        x = (f(b) - f(a) - f_prime(b)*b + f_prime(a)*a)/(f_prime(a) - f_prime(b))
        x = max(a, min(b, x))
        if abs(f_prime(x)) < tol:
            return x, f(x), i + 1
        if f_prime(x) < 0:
            a = x
        else:
            b = x
    x_end = (a + b)/2
    return x_end, f(x_end), iteration

# Метод второго порядка
def parabola_method(x0, tol=1e-6, max_iter=1000):
    """Метод Параболы (второго порядка)"""
    x = x0
    iterations = 0
    
    for i in range(max_iter):
        iterations += 1
        first_deriv = f_prime(x)
        second_deriv = f_double_prime(x)
        
        if abs(first_deriv) < tol:
            break
            
        if abs(second_deriv) < 1e-10:
            break
            
        x_new = x - first_deriv / second_deriv
        
        if abs(x_new - x) < tol:
            break
            
        x = x_new
    
    return x, f(x), iterations

a, b = 3, 5
x0 = 4

print("\nМинимизация функции f(x) = (x-4)^2 + ln(x) на [3, 5]")
print("Точность: 10^-6")
x_min_bis, f_min_bis, iter_bis = bisection_method(a, b)
print("\nМетод деления пополам:")
print(f"x_min = {x_min_bis:.8f}, f_min = {f_min_bis:.8f}, итераций: {iter_bis}")
x_min_tan, f_min_tan, iter_tan = tangent_method(a, b)
print("\nМетод касательных:")
print(f"x_min = {x_min_tan:.8f}, f_min = {f_min_tan:.8f}, итераций: {iter_tan}")
x_min_nt, f_min_nt, iter_nt = parabola_method(x0)
print("\nМетод Параболы:")
print(f"x_min = {x_min_nt:.8f}, f_min = {f_min_nt:.8f}, итераций: {iter_nt}")
print("\nАНАЛИЗ РЕЗУЛЬТАТОВ:")
theoretical_min = 2 + math.sqrt(14)/2
print(f"Теоретический минимум: x ≈ {theoretical_min:.8f}")
methods = [
    ("Деления пополам", iter_bis),
    ("Касательных", iter_tan), 
    ("Параболы", iter_nt)
]
methods.sort(key=lambda x: x[1])
print(f"\nСамый эффективный метод: {methods[0][0]} ({methods[0][1]} итераций)")
print(f"Наименее эффективный: {methods[-1][0]} ({methods[-1][1]} итераций)")