package com.fairshare.services;
import com.fairshare.Requests.CreateExpenseRequest;
import com.fairshare.entity.Expense;
import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import com.fairshare.entity.UserShare;
import com.fairshare.repository.ExpenseRepository;
import com.fairshare.repository.GroupRepository;
import com.fairshare.repository.UserRepository;
import com.fairshare.repository.UserShareRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserShareRepository userShareRepository;

    @Autowired
    private BalanceService balanceService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Transactional
    public Expense addExpense(Integer payerId, CreateExpenseRequest createExpenseRequest) {
        //String expenseName = createExpenseRequest.getExpenseName();
       //Integer expenseId = createExpenseRequest.getExpenseId();
        String description = createExpenseRequest.getDescription();
        Double amount = createExpenseRequest.getAmount();
        String currency = createExpenseRequest.getCurrency();
        //Date date = createExpenseRequest.getDate();
        //Integer payerId = createExpenseRequest.getPayerId();
        Integer categoryId = createExpenseRequest.getCategoryId();
        Integer groupId = createExpenseRequest.getGroupId();

        Group group = groupRepository.findById(groupId).orElse(null);
        User user = userRepository.findById(payerId).orElse(null);

        Expense errorExpense = new Expense();

        if (user == null && group == null) {
            errorExpense.setDescription("GroupAndUserNotFoundError");
            return errorExpense;
        } else if (user == null) {
            errorExpense.setDescription("UserNotFoundError");
            return errorExpense;
        } else if (group == null) {
            errorExpense.setDescription("GroupNotFoundError");
            return errorExpense;
        }

        if (!group.getUsers().contains(user)) {
            errorExpense.setDescription("PayerNotInGroupError");
            return errorExpense;
        }

//        if (expenseRepository.existsByExpenseNameAndGroupId(description, groupId)) {
//            errorExpense.setDescription("ExpenseExistsInGroupError"); // Indicates this expense name exists in this group
//            return errorExpense;
//        }

        if (createExpenseRequest.getCategoryId() == null) {
            createExpenseRequest.setCategoryId(1); // Use the default category
        }

        Expense newExpense = new Expense();
        newExpense.setDescription(description);
        //newExpense.setExpenseId(expenseId);
        newExpense.setDescription(description);
        newExpense.setAmount(amount);
        newExpense.setCurrency(currency);
        newExpense.setDate(createExpenseRequest.getDate());
        newExpense.setPayerId(payerId);
        newExpense.setCategoryId(categoryId);
        //newExpense.setExpenseId(expenseId);
        newExpense.setGroupId(groupId);

        List<UserShare> userShares = createExpenseRequest.getUserShares();
        for (UserShare userShare : userShares) {
            userShare.setExpenseId(newExpense);
        }
        newExpense.setUserShares(userShares);

        expenseRepository.save(newExpense);


        for (UserShare userShare : newExpense.getUserShares()) {
            userShareRepository.save(userShare);
            balanceService.updateBalance(payerId, userShare.getUserId(), userShare.getShareAmount()); // Access userId through User object
       }

        return newExpense; // Return the saved expense
    }

    public List<Expense> getExpensesByGroupId(Integer groupId) {
        List<Expense> expenses = expenseRepository.findByGroupId(groupId);
        for (Expense expense : expenses) {
            User user = userRepository.findById(expense.getPayerId()).orElse(new User());
            expense.setUserName(user.getFirstName());
        }
        return expenses;
    }

    public double getTotalExpensesByGroupId(Integer groupId) {
        List<Expense> expenses = expenseRepository.findByGroupId(groupId);
        double total = 0;
        for (Expense expense : expenses) {
            total += expense.getAmount();
        }
        return total;
    }
}


